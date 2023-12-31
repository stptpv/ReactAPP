import React, { useState } from "react";
import { Container, Modal } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector, useDispatch } from 'react-redux';
import { addArticle, deleteArticle } from "./userActions";
import {Card, ListGroup, Button } from 'react-bootstrap';
import { CDBRating } from 'cdbreact';


 
function ArticleDialog({ isOpen, onClose, onAddArticle }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [tags, setTags] = useState(null);

    const handleAddArticle = () => {
        onAddArticle({ title, content, image, tags });
        console.log("Received articles in handleAddArticle:", title, content, image,tags);
        var notification = new Notification('Плюс одна статейка',
          { body: 'Только ты!'});
        setTitle("");
        setContent("");
        setImage(null);
        setTags("");
        onClose();
    };
  
    
  
    return (
      isOpen && (
        <div className="article-dialog">
          <h2>Добавить статью</h2>
          <input
            type="text"
            placeholder="Название статьи"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Текст статьи"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Теги"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          
          <button onClick={handleAddArticle}>Добавить</button>
        </div>
      )
    );
  }
  function Example() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const dispatch = useDispatch();

    const [selectedArticleIndex, setSelectedArticleIndex] = useState(null);
    const articles = useSelector(state => state.user.articles);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShow1 = () => setShow1(true);
    const handleClose1 = () => setShow1(false);


    const openDialog = () => {
      handleShow(); // Открывает модальное окно
      setIsDialogOpen(true); // Открывает диалоговое окно
    };
    const openDialogDel = () => {
      handleShow1(); // Открывает модальное окно
      setIsDialogOpen(true); // Открывает диалоговое окно
      handleDeleteArticle();
    };
    const handleDeleteArticle = () => {
      if (selectedArticleIndex !== null) {
        dispatch(deleteArticle(selectedArticleIndex));
        setSelectedArticleIndex(null);
      }
    };
    return (
      <>
        <Button variant="primary" onClick={openDialog}>
          Добавить        
        </Button>
        <Button onClick= {openDialogDel}>
          Удалить
        </Button>

        <Modal show={show1} onHide={handleClose1}>
          <Modal.Header closeButton>
            <Modal.Title>Выберите статью для удаления:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <select
        value={selectedArticleIndex}
        onChange={(e) => setSelectedArticleIndex(Number(e.target.value))}
      >
        <option value={null}>Не выбрано</option>
        {articles && articles.map((_, index) => (
          <option key={index} value={index}>
            Статья {index + 1}
          </option>
        ))}
      </select>
      <Button onClick= {openDialogDel}>
          Удалить
        </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose1}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

       
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Добавить статью</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <ArticleDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(true)}
        onAddArticle={(article) => {
            dispatch(addArticle(article));
            console.log('Added article to Redux:', article);
          }}         
        />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  function ArticleList({ articles }) {
    
    return (
          <Card>
            <ListGroup variant="flush">
              {articles&&articles.map((article,index) => (
                <ListGroup.Item key={index}>
                    
                  <Card.Title>{article.articles.title}</Card.Title>
                  <Card.Text>{article.articles.content}</Card.Text>
                  {article.articles.image && (
                    <img
                      src={URL.createObjectURL(article.articles.image)}
                      alt="Article"
                      style={{ maxWidth: "100px" }}
                    />
                  )}
                  <Row><Col>Tags: {article.articles.tags}</Col>
                  <Col><div class="d-flex justify-content-end">Rate:<CDBRating feedback /></div></Col></Row>
                  
                  
                  
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
      );
  }

export const Home = () => {
  const email = useSelector(state => state.user.email);
  const dispatch = useDispatch();
  const articles = useSelector(state => state.user.articles);
  console.log("Articles in Redux state:", articles); // Вывод данных в консоль


  
  return (

    <>
    
    <Container fluid>
        <Row>
        <Col xs={8} >
        <div className="App">
      
        <Example
        />

      <ArticleList articles={articles}  />
      
    </div>
    </Col>
    <Col xs={4} >Latest posts
    <Card >
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <div class="d-flex align-items-end flex-column mb-3" >
  <div class="p-3"><Card.Link href="#" >More</Card.Link></div>

  <div class="p-2">Yesterday</div>

  
</div>
        </Card.Text>
        
        
      </Card.Body>
    </Card>
    Me on twitter
    <Card >
      <Card.Body>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted text-end">Yesterday</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          
        </Card.Text>
        <Card.Subtitle className="mb-2 text-muted text-end">1 week ago</Card.Subtitle>
     
      </Card.Body>
    </Card>
   
    <div>
          {email && <span>Username: {email}</span>}
        </div>
        
    </Col>

    </Row>
    </Container>
    
  </>
 );
    };
    