import React from 'react';
import styles from "./style.module.css"

import bart from "../MemoryGame/characters/Bart_Simpson.png"
import crapable from "../MemoryGame/characters/crapable.png"
import homer from "../MemoryGame/characters/homer.png"
import march from "../MemoryGame/characters/march.png"
import moe from "../MemoryGame/characters/moe.jpg"
import ralph from "../MemoryGame/characters/Ralph-Wiggum.jpg"

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: [
                {
                    id: 11,
                    state:false,
                    img: bart,
                },
                {
                    id: 22,
                    state:false,
                    img: crapable,
                },
                {
                    id: 33,
                    state:false,
                    img: homer,
                },
                {
                    id: 44,
                    state:false,
                    img: march,
                },
                {
                    id: 55,
                    state:false,
                    img: moe,
                },
                {
                    id: 66,
                    state:false,
                    img: ralph,
                },
                {
                    id: 11,
                    state:false,
                    img: bart,
                },
                {
                    id: 22,
                    state:false,
                    img: crapable,
                },
                {
                    id: 33,
                    state:false,
                    img: homer,
                },
                {
                    id: 44,
                    state:false,
                    img: march,
                },
                {
                    id: 55,
                    state:false,
                    img: moe,
                },
                {
                    id: 66,
                    state:false,
                    img: ralph,
                },
            ]
        };
    }
    openCard = (index,id) => {
        let arr = this.state.card;
        arr[index].state = true;
        this.setState({
            card: arr
        })
        let opened = [];
        arr.map((item,index)=>{
            if (item.state === true){
                opened.push(item.id)
                if (opened.length === 2){
                    if (item.id === opened[0]){
                        console.log(item.id === id)
                        let  filter = () =>{
                            let filtered = arr.filter((item)=>{
                                return item.id !== opened[0]
                            })
                            this.setState({
                                card: filtered
                            })

                        }
                        setTimeout(function () {
                            filter();
                            opened = [];
                        },1000)
                    }

                }
            }

        })
        if (opened.length === 2 && opened[0] !== opened[1]){
            let arr = this.state.card;

            let  filter = () =>{
                let filtered  = arr.map((item,index)=>{
                    if (item.id === opened[0] || item.id === opened[1]){
                        let obj = item;
                        obj.state = false
                        return obj
                    }else{
                        return item
                    }
                })
                this.setState({
                    card: filtered
                })
            }
            setTimeout(function () {
                console.log("alert")
                filter();
                opened = [];
            },1000)

        }

    }
    componentDidMount() {
        let array = this.state.card;

            let currentIndex = array.length,  randomIndex;

            while (currentIndex != 0) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                    array[randomIndex], array[currentIndex]];
            }

            this.setState({card : array})


    }

    render() {

        return (
            <div className={styles.container}>
                <h1>{this.state.card.length !== 0 ? "Memory Game" : "You Win"}</h1>
                <div className={styles.memory_grid}>
                    {this.state.card.map((item,index)=>{
                        return (
                            <div onClick={() => this.openCard(index,item.id)} key={index} className={!item.state ? styles.closed : styles.open}>
                                <img src={item.img} alt=""/>
                            </div>
                        )
                    })}
                </div>

            </div>

        );
    }
}

export default TodoList;
