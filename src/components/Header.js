<!-- import React from 'react';
import  $ from 'jquery';

import logo from './sport1.png';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
       Button,Row, Col,Container, Nav, NavItem} from 'reactstrap';

export default class Header extends React.Component{

state={
	stories_data:[],
	
	
}
 

componentDidMount =()=>{

this.getData();

  	}
getData=(e)=>{
	
	$.ajax({
				url:'http://10.90.90.97:8000/get_data',
				method:'get',
				
				dataType:'json',
				success:function(res){
						console.log(res)
						if(res.status === 'success'){
							console.log('---------', res.user)
					       this.setState({stories_data:res.user});	

						}
						else{
							this.setState({stories_data:[]})
						}
				}.bind(this)
				,error:function(err){
					console.log('err');
				}

			});
}






	render(){
const data = this.state.stories_data.map((index)=>
			<Row>

            <Col sm="4">
                <img src="first.jpeg" height="100px" width="100px"/>
              </Col>
              <Col sm="8"><b>Title</b>:<p>{index.title}</p>
              <p><b>category</b>{index.category}</p>
         

          </Col>
            </Row>


	);

		return(

<div class="container">
	<div class="row">
		<div class="col-lg-3 ">
			<div class="text-left"><big><b>Medium</b></big></div>
			</div>
				
			<div class="col-lg-9 text-right ">
			
				<span class="m-2 "><small>Become a member</small></span>
				<span class="m-2 text-success">sign in</span>
				<button class="btn btn-outline-success btn-md">Get started</button>
			</div>
			
		</div>
		<nav class="navbar-fixed-top navbar-expand-lg  navbar-light mt-1 ">
  
  
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link active" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">THE NEW NEW</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">CULTURE</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">TECH</a>
    </li>
     <li class="nav-item">
      <a class="nav-link" href="#">STARTUPS</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">SELF</a>
    </li>
    
    
    <li class="nav-item">
      <a class="nav-link" href="#">POLITICS</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">DESIGN</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">HEALTH</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">POPULAR</a>
    </li>
    
    <li class="nav-item">
      <a class="nav-link" href="#">MORE</a>
    </li>
  </ul>
</nav>
<div class="row">
	<Container>
        <Row>
          <Col sm="4">
            <Card>
             
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>

          <Col sm="4">
            {data}

          </Col>

          <Col sm="4">
            <Card>
              
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

	</div>
<hr/>


	<div class="jumbotron text-left w-100 h-25" >
		<h2 class="mb-3">Welcome to Medium</h2>
		<h2 class="mb-3">Where words matter</h2>
		<p><small>We’ll deliver the best stories and ideas on the topics you </small></p>
		<p><small>care about most straight to your homepage, app, or inbox.
</small></p>
		<span class="m-2 text-dark">sign in</span>
	<button class="btn btn-outline-info btn-md">Get started</button>
	</div>
	

</div>

		
	



			)


			
	}
}
 -->