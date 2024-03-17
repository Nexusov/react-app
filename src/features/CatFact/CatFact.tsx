import { useState, useRef, useEffect } from 'react';
import { Button, FormItem, Input, Panel, Placeholder } from '@vkontakte/vkui';
import fetchData from '../../shared/utils/api';
import { CatFactResponse } from '../../types/types';

import { Icon24ErrorCircleFillRed } from '@vkontakte/icons';


const CatFact = () => {
  const [fact, setFact] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const fetchCatFact = async () => {
    try {
      setLoading(true)
      const data: CatFactResponse = await fetchData({ url: 'https://catfact.ninja/fact' });
      setFact(data.fact);
      setError(null)
    } catch (error) {
      console.error('Fact fetching error', error);
      setError('Fact fetching error')
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    if (inputRef.current && fact) {
      const firstSpaceIndex = fact.indexOf(' ');
      inputRef.current.setSelectionRange(firstSpaceIndex, firstSpaceIndex)
      inputRef.current.focus()
    }
  }, [fact]);

  return (
    <Panel>
      <FormItem>
        <Button size="l" stretched loading={loading} onClick={fetchCatFact}>
          Получить факт о котике
        </Button>
      </FormItem>
      {error ? (
        <Placeholder
          icon={<Icon24ErrorCircleFillRed width={56} height={56} />}
          header="Что-то пошло не так"
        >
          Произошла ошибка
        </Placeholder>
      ) : (
        <FormItem>
          <Input
            type="text"
            value={fact}
            getRef={inputRef}
            onChange={() => { }}
          />
        </FormItem>
      )}
    </Panel>
  );
};

export default CatFact;
