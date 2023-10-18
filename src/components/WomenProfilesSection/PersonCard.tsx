import {useState} from 'react'
import CardStatusLabel from './CardStatusLabel';

interface PersonCardProps {
  id: number;
  photoUrl: string;
  name: string;
  age: string;
  birthday?: boolean;
  online: boolean;
  favorite: boolean;
  sweet: boolean; 
  favoriteStatus: any;
  sweetStatus: any;
}

export default function PersonCard({id, photoUrl, name, age, birthday, online, favorite, sweet, favoriteStatus, sweetStatus}:PersonCardProps) {
  const [favoriteHandler, setFavoriteHandler] = useState(favorite);
  const [sweetHandler, setSweetHandler] = useState(sweet);
  

  const changeFavoriteStatus = () => {
    if (favoriteHandler === true) {
      setFavoriteHandler(false);
      favoriteStatus(id ,false);
    }
    else {
      setFavoriteHandler(true);
      favoriteStatus(id ,true)
    }
  }
  
  const changeSweetStatus = () => {
    if (sweetHandler === true) {
      setSweetHandler(false);
      sweetStatus(id ,false);
    }
    else {
      setSweetHandler(true);
      sweetStatus(id ,true)
    }
  }

  return (
    <div className='women-profiles__gallery-card'>
      <img className='women-profiles__gallery-card-photo' src={photoUrl} alt="" />
      <div className='women-profiles__gallery-card-title-wrapper'>
        <p className='women-profiles__gallery-card-title'>{name}, {age}</p>
      </div>
      <div className='women-profiles__gallery-card--hover'>
        <div className='women-profiles__gallery-card-options-wrapper--hover'>
          { online === true
            ? <div className='women-profiles__gallery-card-labels-wrapper'>
                <CardStatusLabel title='online' titleClass='women-profiles__gallery-card-label' backgroundClass='women-profiles__gallery-card-label-wrapper--green'/>
              </div> 
            : <></>
          }

          { birthday === true
            ? <div className='women-profiles__gallery-card-labels-wrapper'>
                <CardStatusLabel title='soon' titleClass='women-profiles__gallery-card-label--black' backgroundClass='women-profiles__gallery-card-label-wrapper--yellow'/>
                <CardStatusLabel title='birthday' titleClass='women-profiles__gallery-card-label' backgroundClass='women-profiles__gallery-card-label-wrapper--purple'/>
              </div> 
            : <></>
          }
          <div className='women-profiles__gallery-card-options--hover'>
            

            { favoriteHandler === true
              ? <button className='women-profiles__gallery-card-options-favorite-btn women-profiles__gallery-card-options-favorite-btn--active' onClick={e => changeFavoriteStatus()}></button>
              : <button className='women-profiles__gallery-card-options-favorite-btn' onClick={e => changeFavoriteStatus()}></button>
            }
            { sweetHandler === true
              ? <button className='women-profiles__gallery-card-options-sweet-btn women-profiles__gallery-card-options-sweet-btn--active' onClick={e => changeSweetStatus()}></button>
              : <button className='women-profiles__gallery-card-options-sweet-btn' onClick={e => changeSweetStatus()}></button>
            }
          </div>
        </div>
        <div className='women-profiles__gallery-card-options-link--hover'>
          <a className='women-profiles__gallery-card-title' href="/">View profile</a>
        </div>

        <div className='women-profiles__gallery-card-button-wrapper--hover'>
          <button className='women-profiles__gallery-card-button--hover'>
            <p className='women-profiles__gallery-card-button-title--hover'>chat now</p>
          </button>
        </div>
      </div>
    </div>
  )
}
