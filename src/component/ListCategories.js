import React from 'react'
import { Row } from 'react-bootstrap'
import Category from './Category'
import { useArticlesContext } from '../contextApi/ArticlesContext'

function ListCategories() {
  const {categories}=useArticlesContext();
  return (
    <div>
      <Row className='m-4'>
      {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </Row>
    </div>
  )
}

export default ListCategories
