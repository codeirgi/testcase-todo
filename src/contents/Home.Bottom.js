import Cards from "../utils/Cards";

import plus from '../assets/icons/plus.png';
import check from '../assets/icons/check.png';
import minus from '../assets/icons/minus.png';

const HomeBottom = () => {
    return(
        <Cards.Home className="home-bottom">
            <p>Cara menggunakan:</p>
            <ol>
                <li>Anda dapat membuat <span>To Do</span> baru dengan menekan icon <img src={plus} width={16} height={16} alt="plus" /> (tambah)</li>
                <li><span>To Do</span> yang Anda buat berisi judul dan deskripsi</li>
                <li>Anda bisa merubah <span>To Do</span> dengan cara memilih salah satu <span>To Do</span> dan akan muncul pop up dilayar anda, setelah itu anda bisa memilih <span className="bg-warning text-white p-1"> Ubah </span></li>
                <li>Anda bisa menghapus <span>To Do</span> dengan cara memilih salah satu <span>To Do</span> dan akan muncul pop up dilayar anda, setelah itu anda bisa memilih <span className="bg-danger text-white p-1"> Hapus </span></li>
                <li><span>To Do</span> yang sudah Anda kerjakan tidak dapat dihapus melainkan hanya bisa diubah</li>
                <li>Anda bisa merubah status <span>To Do</span> anda dengan cepat dengan menekan icon <img src={check} width={16} height={16} alt="check" /> dan icon <img src={minus} width={16} height={16} alt="minus" /></li>
                <li>Jika anda melupakan sesuatu mari kunjungi <span>To Do</span> </li>
            </ol>
        </Cards.Home>
    )
}

export default HomeBottom;