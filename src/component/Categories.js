import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import ListeArticles from './ListAricles';
import { useArticlesContext } from '../contextApi/ArticlesContext';

function Categories() {
    const {categories}=useArticlesContext();
  return (
    <section className='m-5'>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey={categories.length ? `#${categories[0].title}` : "#Breakfast"}>
        <Row>
          <Col sm={4}>
            <ListGroup>
              {categories.map(category => (
                <ListGroup.Item action href={`#${category.title}`} key={category.id}>
                  {category.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              {categories.map(category => (
                <Tab.Pane eventKey={`#${category.title}`} key={category.id}>
                  <ListeArticles category={category.title} />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </section>
   
  );
}

export default Categories;
