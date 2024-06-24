import { ArticleList } from '../features/ArticleList/ui/ArticleList';
import { useFetch } from '../hooks/useFetch';
import { Article } from '../shared/types/article';

import { StatsButtons } from 'shared/features/Article/ArticleStatsButtons/StatsButtons';
import type { Article as ArticleType } from '../shared/types/article';
import s from './nature.module.css';

import avatar from 'assets/images/Logo_for_a_website_about_Lake_Baikal.png';
import { IconButton } from 'shared/components/IconButton';

import { useSearchParams } from 'react-router-dom';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, useState } from 'react';
import ModalPopup from 'shared/components/ModalPopup';

// export function App() {
//   const [searchParams, setSearchParams] = useSearchParams({ item_id: '' });

//   function onOpenModal(id) {
//     const nextSearchParams = new URLSearchParams(searchParams);
//     const value = id || 'add';
//     nextSearchParams.set('item_id', value);
//     setSearchParams(nextSearchParams);
//   }

//   function onCloseModal() {
//     const nextSearchParams = new URLSearchParams(searchParams);
//     nextSearchParams.delete('item_id');
//     setSearchParams(nextSearchParams);
//   }

//   const id = searchParams.get('item_id');
//   const isOpen = Boolean(id);
//   const isAddModalOpen = isOpen && id === 'add';
//   const isEditModalOpen = isOpen && id !== 'add';

//   return (
//     <>
//       <header>
//         <h1>List</h1>
//         <button onClick={() => onOpenModal()}>Add</button>
//       </header>

//       <ul>
//         {list.map(item => (
//           <li key={item.id}>
//             <span>{item.name}</span>
//             <button onClick={() => onOpenModal(item.id)}>Edit</button>
//           </li>
//         ))}
//       </ul>

//       <dialog open={isAddModalOpen} onClose={onCloseModal}>
//         <h2>Add Modal</h2>
//         <button onClick={onCloseModal}>Close</button>
//       </dialog>

//       <dialog open={isEditModalOpen} onClose={onCloseModal}>
//         <h2>Edit Modal</h2>
//         <p>Item: {id}</p>
//         <button onClick={onCloseModal}>Close</button>
//       </dialog>
//     </>
//   );
// }

// const list = [
//   {
//     id: 1,
//     item_id: 'SighIn',
//     name: 'Остров',
//   },
//   {
//     id: 2,
//     item_id: 'SighUp',
//     name: 'Остров',
//   },
// ];

export const Nature = () => {

  const [modalOpen, setModalOpen] = useState(false);

  // const [params, setParams] = useSearchParams();

  // const onChangeParams = () => {
  //   params.set('modal', 'auth');
  //   setParams(params);
  // };


  //  if (params.get('modal') !== 'auth') return null;

  const [searchParams, setSearchParams] = useSearchParams('');

  const onOpenModal = () => {
    const nextSearchParams = new URLSearchParams(searchParams);
    const value = 'auth';
    nextSearchParams.set('modal', value);
    setSearchParams(nextSearchParams);
    // setModalOpen(true);
  };
  
  const onCloseModal = () => {
    const nextSearchParams = new URLSearchParams(searchParams);
    nextSearchParams.delete('modal');
    setSearchParams(nextSearchParams);
    // setModalOpen(false);
  };

  const id = searchParams.get('modal');
  const isOpen = Boolean(id);
  const isAddModalOpen = isOpen && id === 'auth';
  const isEditModalOpen = isOpen && id !== 'auth';


  // if (modalOpen) {
  //   onOpenModal();
  // }

  // if (!modalOpen) {
  //   onCloseModal();
  // }
  

  

  return (
    <>

      {/* <button className={s.avatar} onClick={() => setModalOpen(true)}>
        Открыть модалку
      </button> */}

      <ModalPopup isOpen={modalOpen} onClose={() => setModalOpen(false)} />


        
        <button className={s.avatar} onClick={onOpenModal}>
        ОТКРЫТЬ
      </button>

      
   

      {console.log("modalOpen", modalOpen)}

      {/* <button className={s.avatar} onClick={() => onChangeParams()}>
        изменить параметры
      </button> */}



      {/* modal = auth */}
      {/* item_id=add */}
      <header>
        <h1>List</h1>
        <button onClick={() => onOpenModal()}>Добавить</button>    
      </header>


      

<button onClick={() => onOpenModal()}>Открыть модалку</button>

<button onClick={onCloseModal}>Закрыть</button>



      <dialog open={isAddModalOpen} onClose={onCloseModal}>
        <h2>Add Modal</h2>
        {/* <button onClick={onCloseModal}>Close</button> */}
      </dialog>

      <dialog open={isEditModalOpen} onClose={onCloseModal}>
        <h2>Edit Modal</h2>
        <p>Item: {id}</p>
        {/* <button onClick={onCloseModal}>Закрыть</button> */}
      </dialog>
    </>
  );
};


// const onOpenModal = (id: any) => {
  //   const nextSearchParams = new URLSearchParams(searchParams);
  //   const value = id || 'add';
  //   nextSearchParams.set('item_id', value);
  //   setSearchParams(nextSearchParams);
  // };



{/* item_id=1 */}
      {/* item_id=2 */}
      {/* <ul>
        {list.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => onOpenModal(item.id)}>Редактировать</button>
          </li>
        ))}
      </ul> */}


 {/* modal = auth */}
      {/* item_id=add */}


  // const onOpenModal = () => {
  //   const nextSearchParams = new URLSearchParams(searchParams);
  //   const value = id || 'add';
  //   nextSearchParams.set('item_id', value);
  //   setSearchParams(nextSearchParams);
  // };

 //  function onOpenModal(id: any) {
  //   const nextSearchParams = new URLSearchParams(searchParams);
  //   const value = id || 'add';
  //   nextSearchParams.set('item_id', value);
  //   setSearchParams(nextSearchParams);
  // }

  // function onCloseModal() {
  //   const nextSearchParams = new URLSearchParams(searchParams);
  //   nextSearchParams.delete('item_id');
  //   setSearchParams(nextSearchParams);
  // }