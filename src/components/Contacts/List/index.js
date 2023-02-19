import {useState} from 'react'

function List({ contacts, setContacts, situation }) {
  return (
    <div className="main">
      <ul className="todo-list">

          {
            contacts.map((item, index) => {
              if(situation === "All"){
                return (
                  <li className={item.isActive ? ``:`completed`} key={index}>
                    <div className="view">
                        <input className="toggle" checked={!item.isActive} type="checkbox" onChange={() =>{
                              let arr = [...contacts];
                              arr[index].isActive = !arr[index].isActive;
                              setContacts(arr);
                        }}/>
                        <label>{item.listElement}</label>
                        <button className="destroy" onClick={() => {
                              let arr2 = [...contacts];
                              arr2 = arr2.filter(function(value){
                                return value !== arr2[index];
                              });
                              setContacts(arr2);
                        }}></button>
                    </div>
                  </li>
                )
              }else if (situation === "Active") {
                if (item.isActive) {
                  return(
                    <li key={index}>
                      <div className="view">
                        <input className="toggle" checked={!item.isActive} type="checkbox" onChange={()=>{
											  let arr = [...contacts]
											  arr[index].isActive = !arr[index].isActive;
											  setContacts(arr)
										  }}/>
                        <label>{item.listElement}</label>
                        <button className="destroy" onClick={() => {
											      let arr2=[...contacts]
											      arr2 = arr2.filter(function(value) {
												    return value !== arr2[index];
											  });
											  setContacts(arr2)
										}}></button>
                      </div>
                    </li>
                  )
                }else if (situation === "Completed") {
                    if (!item.isActive) {
                        return(
                          <li key={index}>
									<div className="view">
										<input className="toggle" checked={!item.isActive} type="checkbox" onChange={()=>{
											let arr = [...contacts]
											arr[index].isActive = !arr[index].isActive;
											setContacts(arr)
										}}/>
										<label>{item.listElement}</label>
										<button className="destroy" onClick={() => {
											let arr2=[...contacts]
											arr2 = arr2.filter(function(value) {
												return value !== arr2[index];
											  });
											  setContacts(arr2)
										}}></button>
									</div>
								</li>
                        )
                    }
                }
              }
            })
          }

      </ul>
    </div>
  )
}

export default List;