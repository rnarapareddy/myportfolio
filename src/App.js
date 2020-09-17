import React, { Component } from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Chip from './components/Chips';
import ControlledExpansionPanels from './components/ControlledExpansionPanels'
import TitlebarGridList from './components/TitlebarGridList'
import Grid from '@material-ui/core/Grid';
import Me from './components/Me.jpeg';
import SAP from './components/SAP.svg';
import Iaa from './components/Iaa.png';
import Visa from './components/Visa.svg';
import Walmart from './components/Walmart.svg';
import Tcs from './components/Tcs.png';
import SJSU from './components/SJSU.png';
import SRM from './components/SRM.jpeg';
import SimplePopover from './components/SimplePopover';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import Dinesh_Tathekalva from './Dinesh_Tathekalva.pdf';

const skills = ["Spring MVC", "Spring Boot 2.x", "Grails-2.x", "Hibernate", "Mybatis", "REST", "SOAP", "Eureka", "Cloud Config", "Cloud Stream", "Zuul", "Hystrix", 
"OpenShift", "Kubernetes", "Docker", "Apache Tomcat", "Wildfly", "WebSphere Application Server", "AngularJS", "ExtJS", "GSP", "JavaScript", "RabbitMQ", "Kafka",
"Pentaho ETL", "Birt Report", "Oracle APEX", "Agile development", "Jira", "Confluence", "Bamboo", "Bitbucket", "Jenkins" ]

function App() {
  const skill = skills.map(i => (<Chip skill={i} />))
  return (
    <body>
      <div className="App">

        <Container maxWidth='md' style={{ backgroundColor: '#0C2E45', padding: '2%', borderRadius: '5px', marginTop: '2%', marginBottom: '2%' }}>
          <Grid container spacing={3}>
            <Grid style={{ marginTop: '2%' }} item xs={12} sm={3}>
              <img style={{ borderRadius: '6%' }} src={Me} class="" width="150" height="150" alt="Dinesh" />
            </Grid>
            <Grid item xs={12} sm={9}>
              <h2 style={{ color: '#FFFFFF' }}>Hi. I'm Raja</h2>
              <p className="intro">Knowledgeable and 7+ years experienced Senior Software Engineer well-versed in OOP concepts and design patterns. Excellent API design, implementation and integration abilities paired with significant project leadership background. Exceptional success in delivering complex software development projects on time and within budget to exceed expectations.</p>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth='md' style={{ backgroundColor: '#113A4D', padding: '2%', borderRadius: '5px', marginTop: '2%', marginBottom: '2%' }}>
          <h2 style={{ color: '#FFFFFF' }}>SKILLS</h2>
          <Typography component="div" style={{ fontSize: '10rem', fontWeight: '100', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', color: '#FFFFFF', height: '25%', width: '100%' }} >
          {/* SKILLS MAPPED */}
            {skill} 
            
          </Typography>
        </Container>

        <Container maxWidth='md' style={{ backgroundColor: '#0F4657', padding: '2%', borderRadius: '5px', marginTop: '2%' }}>
          <h2 style={{ color: '#FFFFFF' }}>PROJECTS</h2>
          <Typography component="div" style={{ justifyContent: 'center', color: '#FFFFFF', height: '25%', width: '100%' }} >
            <ControlledExpansionPanels COheading='Club ordering' VTPheading='Visa Travel Predict' IAAheading="Insurance Auto Auctions" SHheading='Stanford Health' CCSheading='Credit Card Shift'

              COskills='React.js, React Native, Redux, ES6, HTML5, CSS3, LESS' VTPskills='React.js, Redux, ES6, D3.js, HTML5, CSS3' IAAskills='React.js, Redux, ES6, HTML5, CSS3, Bootstrap'
              SHskills='React.js, Redux, JavaScript, HTML5, CSS3, SAP HANA' CCSskills='JQuery, HTML, CSS, JAVA, MySQL'

              COcontent='Club ordering is an internal web and mobile application developed for the
              associates who work at the Samsclub for restocking the items that are running out in the club. The admin portal which is a web based single page
              application built using React.js. React Native based mobile application is used by the associates at clubs for scanning and placing the orders for
              restocking at the club. Redux is used for state management in both web and mobile applications.'

              VTPcontent="Visa Travel Predict is a suite of predictive machine learning scores related
              to a cardholder's travel behavior that can help banks identify the right cardholders for marketing campaigns which is a React.js based application.
              Targeted marketing campaigns could then help improve a cardholder's travel experience by providing more relevant offers and help increase cross
              border payments."

              IAAcontent='Insurance Auto Auctions is a car bidding single page application. The
              customer can go through the thousands of used/ totaled cars using fast and advanced search, bid online and have them shipped anywhere in the united
              states. The application is built using .net in the back-end and React.js in the front-end. Redux was used for the state management of the application.'

              SHcontent='Stanford Health is an application which can process the clinical and
              genomical data of the patient within seconds with the power of SAP HANA in the back-end and React.js in the front-end. I also worked on the back-end
              model which displays the health records of the patients in a time line and developed the front end using React.js and state managment with Redux.
              The application was built on multidimensional analysis which might be a future SAP patent.'

              CCScontent=' Credit card shift is an internal
              application used by Bank of America to change the segment of the credit card on the customer request.  The application also allows to process
              and handle the international transactions between Bank of America and other banks to transfer the money from various banks to Bank of America
              finding the minimum legs between banks when there is no direct contract. I developed the front-end of the application using HTML, CSS and JQuery'
            />
          </Typography>
        </Container>

        <Container maxWidth='md' style={{ backgroundColor: '#1F4E57', padding: '2%', borderRadius: '5px', marginTop: '2%', marginBottom: '2%' }}>
          <h2 style={{ color: '#FFFFFF' }}>I WORKED AT</h2>
          <Paper>
            <Grid container spacing={3} style={{ display: 'flex', justifyContent: 'center' }}>
              <Grid item xs={12} sm={2}>
                <img src={Visa} class="" width="120" height="150" alt="Visa" />
              </Grid>
              <Grid item xs={12} sm={2}>
                <img src={Visa} class="" width="120" height="150" alt="Visa" />
              </Grid>
              <Grid item xs={12} sm={2}>
                <img src={Walmart} class="" width="140" height="150" alt="Walmart" />
              </Grid>
              <Grid style={{ marginTop: '3%' }} item xs={12} sm={2}>
                <img src={Iaa} class="" width="120" height="90" alt="IAA" />
              </Grid>
              <Grid item xs={12} sm={2}>
                <img src={SAP} class="" width="120" height="150" alt="SAP" />
              </Grid>
              <Grid style={{ marginTop: '3%' }} item xs={12} sm={2}>
                <img src={Tcs} class="" width="120" height="75" alt="Tcs" />
              </Grid>
            </Grid>
          </Paper>
        </Container>

        <Container maxWidth='md' style={{ backgroundColor: '#235861', padding: '2%', borderRadius: '5px', marginTop: '2%', marginBottom: '2%' }}>
          <h2 style={{ color: '#FFFFFF' }}>I GRADUATED FROM</h2>
          <Paper >
            <div style={{ flexGrow: '1' }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <p style={{ color: '#081B2E', fontWeight: '300' }}>Masters from</p><img src={SJSU} class="" width="180" height="40" alt="SJSU" style={{ marginTop: '3%' }} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <p style={{ color: '#081B2E', fontWeight: '300' }}>Undergrad from</p><img src={SRM} class="" width="170" height="90" alt="SRM" />
                </Grid>
              </Grid>
            </div>
            <div style={{ flexGrow: '1' }}>
              <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={6} sm={2}>
                </Grid>
                <Grid item xs={6} sm={2}>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Container>

        <Container maxWidth='md' style={{ backgroundColor: '#286570', padding: '2%', borderRadius: '5px', marginTop: '2%', marginBottom: '2%' }}>
          <div style={{ flexGrow: '1' }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <h2 style={{ color: '#FFFFFF' }}>Social Media</h2>
                <ul style= {{listStyle: "none"}}>
                  <li><a style={{ textDecoration: 'none', color: "#FFFFFF", fontWeight: '300'  }} href="https://codepen.io/" target="_blank"><i class="fa fa-codepen"></i> Codepen</a></li>
                  <li><a style={{ textDecoration: 'none', color: "#FFFFFF", fontWeight: '300'  }} href="https://github.com/" target="_blank" title="Dinesh's Github"><i class="fa fa-github"></i> Github</a></li>
                  <li><a style={{ textDecoration: 'none', color: "#FFFFFF", fontWeight: '300'  }} href="https://www.linkedin.com/in/dinesh-tathekalva" target="_blank"><i class="fa fa-linkedin"></i> LinkedIn</a></li>
                </ul>
              </Grid>
              <Grid item xs={12} sm={4}>
                <h2 style={{ color: '#FFFFFF' }}>To know me better</h2>
                <Button className="btn"  variant="outlined" >
                  <GetAppIcon style={{color:'#FFFFFF', fontSize: 20, marginRight: '8px' }} /> <a style={{ color: "#FFFFFF", fontWeight: '300'  }} href={{Dinesh_Tathekalva}} class="btn button1">Download resume </a>
                </Button>
              </Grid>
              <Grid item xs={12} sm={4}>
                <h2 style={{ color: '#FFFFFF' }}>Say Hi</h2>
                <SimplePopover email="If you'd like to know more about me" />
              </Grid>

            </Grid>
          </div>
        </Container>


      </div>
    </body >
  );
}
export default App;