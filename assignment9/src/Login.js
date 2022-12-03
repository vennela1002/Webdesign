import React,{Component} from "react";
import "./index.css"

class Login extends Component{
    constructor(props) {
        super(props);
    
        this.state = {users: []};
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        fetch(`http://localhost:7000/user/getAll`)
        .then((response) => response.json())
        .then((actualData) => this.setState({users : actualData}));
    }

    render(){
        var users = this.state.users
        console.log(users)
        return(
            <div style={{}}>
                <form id="contact">
                    <h2>Login</h2>
                    <br></br>
  
                    <input id = 'username' placeholder="Enter username" type="text" required ></input>
  
                    <input id = 'password' placeholder="Enter password" type="password" required ></input>    

                    <br></br>
                    <br></br>
                    <button type="button" onClick={() => this.submitButton(users)} >Submit</button>
                    <br></br>
                    <br></br>
                    <p id='div1' hidden = {true} style={{color: 'red', fontSize: 'smaller'}}>*Invalid username/password</p>
                </form>
            </div>
        )
    }

    submitButton(users){ 
        if(users.flatMap(x => x.fullname).includes(document.getElementById('username').value)){
            var user = users.filter(x => x.fullname === document.getElementById('username').value)[0]
            if(user.password === document.getElementById('password').value){
                window.location.href = '/home'
            }
        } else {
           document.getElementById('div1').style.display="inline" 
        }
    }
}

export default Login;