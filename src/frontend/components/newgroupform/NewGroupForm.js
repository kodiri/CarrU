import React from 'react';

export default class NewGroupForm extends React.Component { 
    constructor(){
        super();
        this.state ={
            memberList: []
        };
    }
   
    addMemberList(){
        let member = document.getElementById('input-member').value
        let memberList = this.state.memberList;
        memberList.push(member);
        this.setState({memberList: memberList});
        document.getElementById('input-member').value = '';
    }
   
    render() {
        return ( 
            <div>
                 <div className='new-group'>
                    <form>
                        <h1>New Group</h1>
                        <label>
                            Group Name: 
                            <input className='group-name'/>
                        </label> 
                        <label>
                            Description: 
                            <input className='group-description'/>
                        </label> 
                    </form>
                </div>  
                <div className='add-member'>
                    <label> Add Member:
                        <input id='input-member' className='new-member' placeholder='Please add the member email'></input>
                    </label>
                    <button className='add-memberbtn' onClick={() => this.addMemberList()}>Add</button>
                  <list>
                        {
                            this.state.memberList.map(member => <p>{member}</p>)
                        }
                    </list>
                </div>
                <div>
                    <button className='create-groupbtn'>Create</button>
                </div>
            </div>
        )
    }

}