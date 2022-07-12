import React, { Component } from 'react'
import * as PIXI from 'pixi.js'
import './index.css'

class Pixi extends Component {
    app = null
    canvas = null
    canvasRoot = null
    backgroundImage = null
    

    componentDidMount() {
        this.app = new PIXI.Application({ width: window.screen.width, height: 500, backgroundColor: 0x2c3e50 })
        this.canvasParent.append(this.app.view)
        let sprite = PIXI.Sprite.from('https://pixijs.io/examples/examples/assets/bunny.png')
        this.app.stage.addChild(sprite)

        let elapsed = 0.0
        this.app.ticker.add((delta) => {
          elapsed += delta;
          sprite.x = 500.0 + Math.cos(elapsed/100.0) * 500.0;
        })
    }

    componentWillUnmount() {
        if (this.app) {
            this.app.destroy(true, true)
        }
    }

    render() {

        return (
            <div>
                <div className='canvas' ref={ref => { this.canvasParent = ref }} />
            </div>
        )
    }
}

export default Pixi