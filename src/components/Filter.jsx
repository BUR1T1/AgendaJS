const Filter = () => {
    return (
        <div className="filter">
            <h2>filtrar:</h2>
            <div className="filter-options">
                <div>
                    <p>Status:</p>
                    <select>
                        <option value="All">todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incompletas">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p>Ordem alfabetica</p>
                    <button>Asc</button>
                    <button>Desc</button>
                </div>
            </div>
        </div>
    );
};

export default Filter;