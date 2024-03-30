
import React, { useState } from 'react';

const SizeSort = () => {
    // Инициализируем состояние для выбранных размеров
    const [selectedSizes, setSelectedSizes] = useState([]);

    // Функция для обработки изменения состояния при выборе или снятии флажков
    const handleSizeChange = (event) => {
        const size = event.target.value;
        if (event.target.checked) {
            // Добавляем размер в массив выбранных размеров, если флажок отмечен
            setSelectedSizes([...selectedSizes, size]);
        } else {
            // Удаляем размер из массива выбранных размеров, если флажок снят
            setSelectedSizes(selectedSizes.filter((s) => s !== size));
        }
    };

    return (
        <div className="catalog-page">
            <div className="sort__box">
                <div className="sort__check">
                    <input id="sort__check1" type="checkbox" value="XS" onChange={handleSizeChange} />
                    <label htmlFor="sort__check1">XS</label>
                </div>
                <div className="sort__check">
                    <input id="sort__check2" type="checkbox" value="S" onChange={handleSizeChange} />
                    <label htmlFor="sort__check2">S</label>
                </div>
                <div className="sort__check">
                    <input id="sort__check3" type="checkbox" value="M" onChange={handleSizeChange} />
                    <label htmlFor="sort__check3">M</label>
                </div>
                <div className="sort__check">
                    <input id="sort__check4" type="checkbox" value="L" onChange={handleSizeChange} />
                    <label htmlFor="sort__check4">L</label>
                </div>
            </div>
        </div>

    );

};

export default SizeSort;

