import React from 'react'
import { Card, Icon, Grid} from 'semantic-ui-react'
import DATA from "../data/DATA"



const listdata =() => (
    <div>
      {DATA.map((data) => {
        return (
          <div>
            <Grid centered columns={5} padded>
              <Grid.Row>
                <Grid.Column>
                  <img src={data.image} alt={data.image}/>
                  <Card.Content>
                    <Card.Header>
                      {data.title}
                    </Card.Header>
                    <Card.Description>
                      <a>
                        <Icon name='info circle' className="info"/>
                        {data.title}
                      </a>
                    </Card.Description>

                    <Card.Description>
                      <a>
                        <Icon name='info circle' className="info"/>
                        {data.genre}
                      </a>
                    </Card.Description>

                    <Card.Description>
                      <a>
                        <Icon name='info circle' className="info"/>
                        {data.rating}
                      </a>
                    </Card.Description>
                    <Card.Description>
                      <a>
                        <Icon name='info circle' className="info"/>
                        {data.desc}
                      </a>
                    </Card.Description>
                  </Card.Content>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </div>

        );
      }
      )}
    </div>
    )

  export default listdata
