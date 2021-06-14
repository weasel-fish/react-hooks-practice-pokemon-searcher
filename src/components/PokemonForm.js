import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({handleSubmit}) {
  //state holds form data and make it controlled
  const [formData, setFormData] = useState({
    name: '',
    hp: '',
    sprites: {
      front: '',
      back: ''
    }
  })

  function handleChange(e, prop) {
    const newData = {
      ...formData,
      [prop]: e.target.value
    }
    setFormData(newData)
  }

  function handleOtherChange(e, prop) {
    const newData = {
      ...formData,
      sprites: {
        ...formData.sprites,
        [prop]: e.target.value
      }
    }
    setFormData(newData)
  }


  //handleSubmit function passes new pokemon info into function up in PokemonPage


  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => handleSubmit(formData)}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e) => handleChange(e, 'name')} value={formData.name}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e) => handleChange(e, 'hp')} value={formData.hp}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            onChange={(e) => handleOtherChange(e, 'front')}
            value={formData.sprites.front}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            onChange={(e) => handleOtherChange(e, 'back')}
            value={formData.sprites.back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
