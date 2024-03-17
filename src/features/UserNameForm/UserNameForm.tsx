import { Button, FormItem, FormLayoutGroup, Input, Paragraph } from "@vkontakte/vkui"
import { useEffect, useRef, useState } from "react";
import fetchData from "../../shared/utils/api";

export const UserNameForm = () => {

  const [name, setName] = useState('');
  const [age, setAge] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const lastRequestedName = useRef('');
  const abortControllerRef = useRef(new AbortController());

  const fetchAge = async (name: string) => {
    setLoading(true);
    abortControllerRef.current.abort(); 
    abortControllerRef.current = new AbortController();

    try {
      const data = await fetchData<{ age: number }>({
        url: `https://api.agify.io/?name=${name}`,
        headers: { 'Content-Type': 'application/json' },
        method: 'GET',
      });
      setAge(data.age);
      lastRequestedName.current = name;
    } catch (error) {
      console.error('Fetch age error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (name && name !== lastRequestedName.current) {
        fetchAge(name);
      }
    }, 3000);

    return () => clearTimeout(timerId);
  }, [name]);

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    if (name && name !== lastRequestedName.current) {
      fetchAge(name)
    }
  };

  return (
    <FormLayoutGroup onSubmit={handleSubmit}>
      <FormItem>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {age !== null ? (
          <div style={{ paddingTop: 20 }}>
            <Paragraph weight="3">Возраст:{` ${age}`}</Paragraph>
          </div>
        ) : (
          <div style={{ paddingTop: 20 }}>
            <Paragraph weight="3">Не могу определить возраст</Paragraph>
          </div>
        )}
      </FormItem>
      <FormItem>
        <Button size="l" stretched loading={loading} type="submit">
          Узнать возраст
        </Button>
      </FormItem>
    </FormLayoutGroup >
  )
}

export default UserNameForm;