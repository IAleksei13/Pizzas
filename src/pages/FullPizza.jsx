import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetcgPizza() {
      try {
        const { data } = await axios.get('https://64d755202a017531bc1324fc.mockapi.io/items/' + id);
        setPizza(data);
      } catch (error) {
        alert('Ошибка');
        navigate('/');
      }
    }

    fetcgPizza();
  }, []);
  if (!pizza) {
    return 'Загрузка';
  }

  return <div>{pizza.title}</div>;
};

export default FullPizza;
