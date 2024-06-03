import React, { PureComponent } from 'react'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <nav class="py-2 bg-body-tertiary border-bottom">
                <div class="container d-flex flex-wrap">
                    <ul class="nav me-auto">
                        <li class="nav-item"><a href="https://github.com/amitip81/zapple-app" class="nav-link link-body-emphasis px-2 active">Zapple | Github</a></li>
                    </ul>
                    <ul class="nav">
                        <li class="nav-item"><a href="https://linkedin.com/in/amitip81" target='_blank' class="nav-link link-body-emphasis px-2">Linkedin</a></li>
                        <li class="nav-item"><a href="https://github.com/amitip81/zapple-app/tree/main/docs" target='_blank' class="nav-link link-body-emphasis px-2">Docs</a></li>
                        <li class="nav-item"><a href="https://github.com/amitip81/zapple-app" target='_blank' class="nav-link link-body-emphasis px-2">Github</a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Header