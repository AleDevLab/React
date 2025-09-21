function Boton({ texto, onClick }) {
  return (
    <button 
      onClick={onClick} 
      style={{
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px'
      }}
    >
      {texto}
    </button>
  );
}

export default Boton;
