import React from 'react'
import "./css/index.css"
import CatComponent from './categoriesComponent'
import {catData} from './categoriesData'
import BookComponent from './booksComponent'


export default function Cat() {
  // State that determine the Visibility of the category section
    const [catId, visibility] = React.useState(false)

    // State collects the selected id  
    const [selectedId, changeSelectedId] = React.useState('')

    function doTest(e) {
        console.log(`ID: ${e}`)
        visibility(true)
        changeSelectedId(e)
    }

    const filterData = catData.filter((el)=>{
      return el.id === selectedId
    })
    
    console.log(filterData)
    
    const bookData = filterData.map(data => {
      let dataContent = data.content
      return dataContent.map(item => {
        return (
          <BookComponent 
            key={item?.title}
            imgUrl={item?.imgUrl}
            title={item.title}
            {...item}
          /> 
        )
      })
    })

    const CatEl = (props) => {
      return (
        <section className='Book-comp'>
          <h1>Niche: {props.niche}</h1> 
          <div className='book-cat-sec'> 
            {CatsData}
          </div>
          <div className="book-sec">
            {bookData}
          </div>
        </section> 
      )
    }


    const CatsData = catData.map(item => {
        return (
          <CatComponent 
            key={item.key}
            {...item}
            func={doTest}
          />
        )
    })

    return (
        <div>
          { !catId && <section className="categories">
                <h1>What niche are you looking for? </h1>
                <div>{CatsData}</div>
            </section>
          }
          { catId && <CatEl niche={selectedId} /> }          
        </div>
    )
}