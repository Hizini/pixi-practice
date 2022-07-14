import React, { Component } from 'react'
import * as PIXI from 'pixi.js'
import './index.css'

const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#8bc541'],
    stroke: '#202020',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
})
class Pixi extends Component {
    app = null
    canvas = null
    
    componentDidMount() {
        this.app = new PIXI.Application({ width: window.screen.width, height: 500, backgroundColor: 0x2c3e50 })
        this.canvas.append(this.app.view)
        let sprite = PIXI.Sprite.from('https://pixijs.io/examples/examples/assets/bunny.png')
        this.app.stage.addChild(sprite)

        let elapsed = 0.0
        this.app.ticker.add((delta) => {
          elapsed += delta
          sprite.x = 500.0 + Math.cos(elapsed/100.0) * 500.0
          sprite.y = 250
        })

        const text = new PIXI.Text('hello~~~ everyone~~')
        const text2 = new PIXI.Text('hello~~~ everyone~~', style)
        this.app.stage.addChild(text)
        this.app.stage.addChild(text2)
        
        text.skew.set(0.4, -0.3);
        text.anchor.set(0.5, -0.5);
        text.x = 1000
        text.y = 50
        text2.x = 50
        text2.y = 100
    }

    componentWillUnmount() {
        if (this.app) {
            this.app.destroy(true, true)
        }
    }

    render() {

        return (
            <div>
                <div className='canvas' ref={ref => { this.canvas = ref }} />
            </div>
        )
    }
}

export default Pixi