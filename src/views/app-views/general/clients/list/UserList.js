import React, {useEffect, useState} from 'react';
import {Card, Table} from "antd";
import AvatarStatus from "../../../../../components/shared-components/AvatarStatus";
import Loading from "../../../../../components/shared-components/Loading";
import {Link} from "react-router-dom";

const UserList = ({match}) => {
    console.log(match)
    const [users,setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const tableColumns = [
        {
            title: 'Имя',
            dataIndex: 'name',
            sorter: {
                compare: (a, b) => {
                    a = a.name.toLowerCase();
                    b = b.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
            render: (_, record) => (
                <div className="d-flex">
                    <Link to={`${match.url}/${record.id}`}>
                        <AvatarStatus name={record.name} subTitle={record.email}/>
                    </Link>
                </div>
            ),
        },
        {
            title: 'Телефон',
            dataIndex: 'phone',
            sorter: {
                compare: (a, b) => {
                    a = a.name.toLowerCase();
                    b = b.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        },
        {
            title: 'Сайт',
            dataIndex: 'website',
            sorter: {
                compare: (a, b) => {
                    a = a.name.toLowerCase();
                    b = b.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        }
    ]

    useEffect(()=>{
        const fetchUsers = async () => {
            setIsLoading(true)
            await fetch('https://jsonplaceholder.typicode.com/users').then(response => {
                if (response.ok) {
                    response.json().then(setUsers)
                } else {
                    setUsers([])
                }
            })
            setIsLoading(false)
        }
        fetchUsers()
    },[])
    if (isLoading) {
        return (<Loading cover='content'/>)
    }
    return (
        <Card bodyStyle={{'padding': '0px'}}>
            <Table columns={tableColumns} dataSource={users} rowKey='id' />
        </Card>
    );
};

export default UserList;
