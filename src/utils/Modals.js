import { useContext } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";

const Modals = ({ data, isModalShow, ...props }) => {

    const todo = useContext(TodoContext);

    const {
        handleDelete,
        handleShowModalUpdate,
        handleHideModal,
    } = todo;

    return(
        <Modal
            centered
            show={isModalShow}
            onHide={handleHideModal}
            {...props}
        >
            <Modal.Header closeButton>
                <Modal.Title> Detail </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="m-0 fw-bold">Judul:</p>
                <p> {data.title} </p>
                <p className="m-0 fw-bold">Deskripsi:</p>
                <p> {data.description} </p>
                <p className="fw-bold">
                    Status: {data.status === 0 
                    ? <span className="bg-secondary text-white p-1 fw-normal">Belum selesai</span> 
                    : <span className="bg-success text-white p-1 fw-normal">Sudah selesai</span>}
                </p>
                <p className="m-0 fw-bold">Waktu pembuatan:</p>
                <p>{data.createdAt}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    variant="warning"
                    onClick={() => {
                        handleShowModalUpdate(data)
                        handleHideModal()
                    }}
                >
                    Ubah
                </Button>
                <Button 
                    variant="danger"
                    onClick={() => {
                        handleDelete(data && data.id)
                    }}
                    disabled={data && data.status === 1 ? true : false}
                >
                    Hapus
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

Modals.Cu = ({ data, isModalShow, hideModal, handleCreate, handleUpdate, handleChangeTitle, handleChangeDesc, handleChangeStatus, ...props }) => {

    return(
        <Modal
            centered
            show={isModalShow}
            onHide={hideModal}
            {...props}
        >
            <Modal.Header closeButton>
                <Modal.Title> {data ? "Ubah" : "Buat"} </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group>
                    <Form.Label>Judul</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Masukkan judul"
                        defaultValue={data && data.title}
                        onChange={handleChangeTitle}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Deskripsi</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        placeholder="Masukkan deskripsi"
                        defaultValue={data && data.description}
                        onChange={handleChangeDesc}
                    />
                </Form.Group>

                {data && (
                    <Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Form.Select 
                            defaultValue={data && data.status}
                            onChange={handleChangeStatus}
                        >
                            <option value="1">Sudah selesai</option>
                            <option value="0">Belum selesai</option>
                        </Form.Select>
                    </Form.Group>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button 
                    variant={data ? "warning" : "primary"}
                    onClick={data ? handleUpdate : handleCreate}
                >
                    {data ? "Ubah" : "Simpan"}
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Modals;