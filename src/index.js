import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';




class FormInp extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {value:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {submitstatus:false};

    }

    handleChange(event)
    {
        this.setState({value: event.target.value});
    }

    handleSubmit(event)
    {
        this.setState({submitstatus:true});
    }

    render()
    {
        const submitstatus = this.state.submitstatus;
        if(!submitstatus){

        
        return(
            
            <div>
                <h6>Enter your name:</h6>
                <form onSubmit={this.handleSubmit}>
                <input type='text' value={this.state.value} onChange = {this.handleChange} required/>
                <button type='submit'>Submit</button>
                </form>
            </div>
        );
        }
        else{
            const nicknames = ["Bestie","Darling","Honey","PlayBoy","Mama","Lion","Boss","Mad","Handsome","Sexy","Champ","Chintu","Bava","Tiger","Barbie Girl","Bat Man","Robo","True Lover","Faltose","Doberman","Best Kisser","Topper","Amul Baby","Ghost","Devil","Genius","Sound Engineer","Pig","Fat","IPhone Lover","Foodie","Black Sheep","Bobbili Puli","Sharp","Dare Devil","Fruit","Terminator","Hulk","BFF","PhD in Flirting","Chatter Box","Gangster","Panda","Crazy Bird","BrokenUp Bottle","Big Bro","Self Motivated","Ice Cream Lover"];
            const colors = ["Black","Blue","Yellow","Red","White","Green","Pink","Orange","Green"];
            var colorrandomnumber = Math.floor((Math.random() * colors.length-1) + 1);
            const textcolor = {
                color:colors[colorrandomnumber]
            }
    
            var nickrandomnumber = Math.floor((Math.random() * nicknames.length - 1) + 1);

            const days = ["Every Day is Lucky for you","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Every day is lucky for you.. Can Propose today.. Haha","Today"];
            var dayrandomnumber = Math.floor((Math.random() * days.length-1) + 1);

            const crushnames = ["A","B","D","G","H","J","K","L","M","N","P","R","S","T","V","Y"];
            var crushnamerandomnumber = Math.floor((Math.random() * crushnames.length-1) + 1);

            const marryin = ["2019","2020","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032","2040","2035","2028","2036","You are already married in Dreams","2060"]
            var marryinrandomnumber = Math.floor((Math.random() * marryin.length-1) + 1);

            const crushno = ["1... May be it was the True Love... ","2.... Stay calm, and Stay Clam... ","3... Make a good choice","4... May be you stolen some good hearts.. ","5... OMG!!","6... Looks like you are good at flirting,Right?","7.... Luck you are","8... Chekmate...","9... Really??","Woww!!... 10","Superb... 11","Awesome.... 12"]
            var crushnorandomnumber = Math.floor((Math.random() * crushno.length-1) + 1);

            const crushpercen = ["78%","80%","100%","99.99%","85%","91%","88%","100%","Unmeasurable!!","Sky is the limit for your love"];
            var crushpercenrandomnumber = Math.floor((Math.random() * crushpercen.length-1) + 1);

            return (
                <div>
                    <h1></h1>
                    <h3>Hello, {this.state.value}</h3><br/>
                <table class="table table-striped table-dark">
                
                <tbody>
                <tr>
                    <th scope="row">Nick name:</th>
                    <td>{nicknames[nickrandomnumber]}</td>
                </tr>

                <tr>
                    <th scope="row">Lucky Color:</th>
                    <td style={textcolor}>{colors[colorrandomnumber]}</td>
                </tr>
                    
                    <tr>
                    <th scope="row">Lucky Day:</th>
                    <td>{days[dayrandomnumber]}</td>
                    </tr>

                <tr>
                    <th scope="row">Your crush name starts with:</th>
                    <td>{crushnames[crushnamerandomnumber]}</td>
                </tr>

                <tr>
                    <th scope="row">May marry in:</th>
                    <td>{marryin[marryinrandomnumber]}</td>
                </tr>
                <tr>
                    <th scope="row">No.of people have crush on you:</th>
                    <td>{crushno[crushnorandomnumber]}</td>
                </tr>
                <tr>
                    <th scope="row">How much your Crush loves you:</th>
                    <td>{crushpercen[crushpercenrandomnumber]}</td>
                </tr>
                    
                    
                    
                </tbody>
                </table>
                </div>
                
            );
        }
    }
}

ReactDOM.render(
    <FormInp />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
