import React, {Component} from 'react'
import { Card, Grid, Image} from 'semantic-ui-react'
import DATA from "../data/DATA"
import {Icon} from 'antd'
import axios from 'axios'



const listdata =() => (
    <div>
      <Grid centered columns={5} padded>
        {/* <Grid.Row> */}
        {DATA.map((data) => {
          return (

            <Grid.Column>
              <Card>
                <div className="img-poster">
                  <Image src={data.image} alt={data.image}/>

                </div>

                <Card.Content>
                  <Card.Header>
                    {data.title}
                  </Card.Header>
                  <Card.Description>
                    <Icon type="aliwangwang-o" />{data.genre}
                  </Card.Description>

                  <Card.Description>
                    <Icon type="star-o" />
                    {data.rating}

                  </Card.Description>
                  <Card.Description>
                    <Icon type="info-circle-o" /> {data.desc}

                  </Card.Description>
                </Card.Content>
              </Card>

            </Grid.Column>

          );
        }
        )}
        {/* </Grid.Row>
        */}
      </Grid>
    </div>
    )

  export default listdata


//using Axios
// export default class upcoming extends Component {
//
//     state ={
//       movies: []
//     }
//     componentDidMount() {
//       axios.get(`https://api.opendota.com/api/proPlayers`)
//         .then(res => {
//           const movies = res.data;
//           this.setState({movies})
//         })
//     }
//     render(){
//       return (
//         <ul>{this.state.movies.map(movie =>
//           <li>{movie.name} {movie.team_name}</li>
//
//         )}</ul>
//       );
//     }
//
// }
