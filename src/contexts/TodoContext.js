import axios from "axios";
import { Component, createContext } from "react";

export const TodoContext = createContext();

export default class TodoContextProvider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todoList: [],
            isModalDetail: false,
            isModalCreate: false,
            isModalUpdate: false,
            dataModal: [],
            title: '',
            desc: '',
            status: '',
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios.get("https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list")
            .then((res) => {
                this.setState({
                    todoList: res.data
                })
            }).catch((e) => {
                console.error(e);
            })
    }

    getNewDate() {
        var d = new Date();
        var month = '' + (d.getMonth() + 1)
        var day = '' + d.getDate();
        var year = d.getFullYear();
        var hour = d.getHours();
        var minute = d.getMinutes();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-') + " " + hour + ":" + minute;
    }

    handleUpdate = () => {
        var dataUpdate = this.state.todoList.filter((item) => item.id !== this.state.dataModal.id);
        dataUpdate.push({
            id: this.state.dataModal.id,
            title: this.state.title,
            description: this.state.desc,
            status: Number(this.state.status),
            createdAt: this.getNewDate(),
        })

        this.setState({
            todoList: dataUpdate,
            dataModal: []
        })
    }

    handleUpdateStatus = (id) => {
        var dataUpdate = this.state.todoList.filter((item) => item.id !== id);
        var dataBefore = this.state.todoList.filter((item) => item.id == id);

        dataUpdate.push({
            id: id,
            title: dataBefore[0].title,
            description: dataBefore[0].description,
            status: dataBefore[0].status === 0 ? 1 : 0,
            createdAt: this.getNewDate(),
        })

        this.setState({
            todoList: dataUpdate
        })
    }

    handleCreate = () => {
        this.setState((prevState) => ({
            todoList: [{
                id: this.state.todoList.length + 1,
                title: this.state.title,
                description: this.state.desc,
                status: 0,
                createdAt: this.getNewDate(),
            }, ...prevState.todoList],
            title: '',
            desc: '',
            isModalCreate: false,
            dataModal: []
        }))
    }

    handleChangeTitle = (e) => {
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        })
    }

    handleChangeDesc = (e) => {
        console.log(e.target.value);
        this.setState({
            desc: e.target.value
        })
    }

    handleChangeStatus = (e) => {
        console.log(e.target.value);
        this.setState({
            status: e.target.value
        })
    }

    handleDelete = (id) => {
        this.handleHideModal()
        this.setState({
            todoList: this.state.todoList.filter((data) => data.id !== id)
        })
    }

    handleShowModal = (data) => {
        this.setState({
            isModalDetail: true,
            dataModal: data
        })
    }

    handleShowModalCreate = () => {
        this.setState({
            isModalCreate: true,
        })
    }

    handleShowModalUpdate = (data) => {
        console.log(data);
        this.setState({
            isModalUpdate: true,
            dataModal: data,
            title: data.title,
            desc: data.description,
            status: data.status,
        })
    }

    handleHideModal = () => {
        this.setState({
            isModalDetail: false
        })
    }

    handleHideModalCreate = () => {
        this.setState({
            isModalCreate: false
        })
    }

    handleHideModalUpdate = () => {
        this.setState({
            isModalUpdate: false
        })
    }

    render() {
        return(
            <TodoContext.Provider
                value={{
                    ...this.state,
                    handleUpdate: this.handleUpdate,
                    handleUpdateStatus: this.handleUpdateStatus,
                    handleCreate: this.handleCreate,
                    handleChangeTitle: this.handleChangeTitle,
                    handleChangeDesc: this.handleChangeDesc,
                    handleChangeStatus: this.handleChangeStatus,
                    handleDelete: this.handleDelete,
                    handleDone: this.handleDone,
                    handleShowModal: this.handleShowModal,
                    handleShowModalCreate: this.handleShowModalCreate,
                    handleShowModalUpdate: this.handleShowModalUpdate,
                    handleHideModal: this.handleHideModal,
                    handleHideModalCreate: this.handleHideModalCreate,
                    handleHideModalUpdate: this.handleHideModalUpdate
                }}
            >
                {this.props.children}
            </TodoContext.Provider>
        )
    }
}