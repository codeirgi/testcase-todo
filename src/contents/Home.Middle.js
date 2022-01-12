import { Fragment, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import Cards from "../utils/Cards";
import Lists from "../utils/Lists";
import Modals from "../utils/Modals";

const HomeMiddle = () => {

    const todo = useContext(TodoContext);

    const {
        todoList,
        dataModal,
        isModalDetail,
        isModalCreate,
        isModalUpdate,
        handleShowModal,
        handleShowModalCreate,
        handleHideModalCreate,
        handleHideModalUpdate,
        handleCreate,
        handleUpdate,
        handleUpdateStatus,
        handleChangeTitle,
        handleChangeDesc,
        handleChangeStatus
    } = todo;

    const isDone = todoList.filter((data) => data.status === 1).sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    });
    const isPending = todoList.filter((data) => data.status === 0).sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt);
    });

    return(
        <Fragment>
            <Cards.Home>
                <div className="d-flex justify-content-evenly">
                    <Cards.Frame 
                        title="Yang belum Anda kerjakan"
                        onCreate={() => {
                            handleShowModalCreate()
                        }}
                    >
                        {isPending.map((data, index) => (
                            <Lists
                                key={index}
                                title={data.title}
                                status={data.status}
                                onClick={() => {
                                    handleShowModal(data)
                                }}
                                onChangeStatus={() => {
                                    handleUpdateStatus(data.id)
                                }}
                            />
                        ))}
                    </Cards.Frame>
                    <Cards.Frame 
                        title="Yang sudah Anda kerjakan"
                        onCreate={() => {
                            handleShowModalCreate()
                        }}
                    >
                        {isDone.map((data, index) => (
                            <Lists
                                key={index}
                                title={data.title}
                                status={data.status}
                                onClick={() => {
                                    handleShowModal(data)
                                }}
                                onChangeStatus={() => {
                                    handleUpdateStatus(data.id)
                                }}
                            />
                        ))}
                    </Cards.Frame>
                </div>
            </Cards.Home>
            <Modals 
                data={dataModal}
                isModalShow={isModalDetail}
            />
            <Modals.Cu
                isModalShow={isModalCreate}
                hideModal={handleHideModalCreate}
                handleCreate={handleCreate}
                handleChangeTitle={handleChangeTitle}
                handleChangeDesc={handleChangeDesc}
            />
            <Modals.Cu
                data={dataModal}
                isModalShow={isModalUpdate}
                hideModal={handleHideModalUpdate}
                handleUpdate={handleUpdate}
                handleChangeTitle={handleChangeTitle}
                handleChangeDesc={handleChangeDesc}
                handleChangeStatus={handleChangeStatus}
            />
        </Fragment>
    )
}

export default HomeMiddle;