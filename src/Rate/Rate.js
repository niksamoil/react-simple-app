import React from 'react';
import './Rate.css';

import Calc from '../Calc/Calc.js';

class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            currencyRate: {}
        };
        this.currency = ['USD', 'RUB', 'BRL', 'GBP'];
        this.getRate();
    }

    getRate = () => {
        fetch('https://api.exchangeratesapi.io/latest').then(data => {
            return data.json()
        }).then(data => {
            this.setState({date: data.date});

            let results = {};
            for (let i = 0; i < this.currency.length; i++) {
                results[this.currency[i]] = data.rates[this.currency[i]];
            }

            this.setState({currencyRate: results})
        })
    }

    render() {
        return (
            <div className='rate'>
                <h3>
                    Курс валют на {this.state.date}
                </h3>
                <div className="flex-container">
                    {Object
                        .keys(this.state.currencyRate)
                        .map((keyName, i) => {
                            return <div className="block flex-item" key={keyName}>
                                <div className="currency-name">{keyName}</div>
                                <div className="currency-in">{this.state.currencyRate[keyName]}*</div>
                                <p>* Можно купить за 1 EUR</p>
                            </div>
                        })}

                </div>
                <Calc rate={this.state.currencyRate} />
            </div>
        );
    }
}

export default Rate;