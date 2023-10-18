import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import RedirectButton from '../RedirectButton/RedirectButton';
import { IPersonProfile } from '../../models/IPersonProfile';

import './WomenProfilesSection.css'
import PersonCard from './PersonCard';


export default function WomenProfilesSection() {

  const [personList, setPersonList] = useState<IPersonProfile[]>([
    {id: 1, photoUrl: '../img/WomenProfilesGallery/photo-1.jpg', name: 'Yana', age: '29', birthday: false, online: true, favorite: false,sweet: false, },
    {id: 2, photoUrl: '../img/WomenProfilesGallery/photo-2.jpg', name: 'Alyonka', age: '29', birthday: true, online: false, favorite: false,sweet: false, },
    {id: 3, photoUrl: '../img/WomenProfilesGallery/photo-3.jpg', name: 'Sofi', age: '19', birthday: false, online: true, favorite: false,sweet: false, },
    {id: 4, photoUrl: '../img/WomenProfilesGallery/photo-4.jpg', name: 'Alexandra', age: '34', birthday: false, online: false, favorite: false,sweet: false, },
    {id: 5, photoUrl: '../img/WomenProfilesGallery/photo-5.jpg', name: 'Karina', age: '23', birthday: false, online: false, favorite: false,sweet: false, },
    {id: 6, photoUrl: '../img/WomenProfilesGallery/photo-6.jpg', name: 'Marina', age: '20', birthday: false, online: false, favorite: false,sweet: false, },
    {id: 7, photoUrl: '../img/WomenProfilesGallery/photo-7.jpg', name: 'Svetlana', age: '40', birthday: false, online: false, favorite: false,sweet: false, },
    {id: 8, photoUrl: '../img/WomenProfilesGallery/photo-8.jpg', name: 'Marina', age: '33', birthday: false, online: false, favorite: false,sweet: false, },
    {id: 9, photoUrl: '../img/WomenProfilesGallery/photo-9.jpg', name: 'Marina', age: '20', birthday: false, online: false, favorite: false,sweet: false, },
  ])

  const [filteredPersonList, setFilteredPersonList] = useState<IPersonProfile[]>([]);
  const [filterHandler, setFilterHandler] = useState('')


  useEffect(() => {
    switch (filterHandler) {
      case 'favorites':
        setFilteredPersonList(personList.filter(item => item.favorite === true))
        break;

      case 'sweet':
        setFilteredPersonList(personList.filter(item => item.sweet === true))

        break;

      default:
        setFilteredPersonList(personList)
    }
  },[personList, filterHandler])


  useEffect(()=> {
    //check on list exist in local storage
    if (localStorage.getItem("filteredPersonList") === null){
    
    }
    else {
      const storedList = JSON.parse(localStorage.getItem("filteredPersonList") || "");
      setFilteredPersonList(storedList)
      setPersonList(storedList)
    }
  },[]);

  
  function changeFavoriteStatus(id:number, status:boolean) {
    const storageList = personList;
    storageList.forEach((item) => {
      if(item.id === id) {
        item.favorite = status
      }
    })
    localStorage.setItem("filteredPersonList", JSON.stringify(storageList));
  }

  function changeSweetStatus(id:number, status:boolean) {
    const storageList = personList;
    storageList.forEach((item) => {
      if(item.id === id) {
        item.sweet = status
      }
    })
    localStorage.setItem("filteredPersonList", JSON.stringify(storageList));
  }


  return (
    <section className='women-profiles'>
      <Container>
        <div className='women-profiles__title-wrapper'>
          <h3 className='women-profiles__title'><span className='women-profiles__title--red'>1000+</span> real Ukrainian Women profiles</h3>
        </div>
        <div className='women-profiles__gallery-wrapper'>
          <div className='women-profiles__gallery-filter-wrapper'>
            <ul className='women-profiles__gallery-filter-list'>
              <li className='women-profiles__gallery-filter-list-item' onClick={e => setFilterHandler('')}>All</li>
              <li className='women-profiles__gallery-filter-list-item' onClick={e => setFilterHandler('favorites')}>Favorites</li>
              <li className='women-profiles__gallery-filter-list-item' onClick={e => setFilterHandler('sweet')}>Sweet</li>
            </ul>
          </div>
          <div className='women-profiles__gallery'>
            {filteredPersonList.map(item => 
                <PersonCard 
                  favoriteStatus={changeFavoriteStatus}
                  sweetStatus={changeSweetStatus}
                  key={item.id}
                  id={item.id}
                  photoUrl={item.photoUrl} 
                  name={item.name} 
                  age={item.age} 
                  birthday={item.birthday} 
                  online={item.online} 
                  favorite={item.favorite} 
                  sweet={item.sweet}
                />
              )}
          </div>
        </div>
        <div className='women-profiles__buttons-wrapper'>
          <RedirectButton className='redirect-btn redirect-btn--sm-w100' title='see more ladies' href='/' />
          <RedirectButton className='redirect-btn redirect-btn--white redirect-btn--sm-w100' title='more filters' href='/' />
        </div>
      </Container>
    </section>
  )
}
