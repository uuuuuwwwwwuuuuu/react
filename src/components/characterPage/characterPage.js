import React, {Component} from "react";
import ItemList from "../itemList";
import CharDetails, {Field} from "../charDetails";
import ErrorMessage from "../errorMessage/errorMessage";
import GetResource from "../../services/getResource";
import RowBlock from "../RowBlock/rowBlock";


export default class CharacterPage extends Component {
  
  service = new GetResource();

  state = {
    selectedItem: null,
    error: false,
  }

  componentDidCatch() {
    this.setState({error: true});
  }

  onCharSelected = (selectedItem) => {
    this.setState({selectedItem});
  }

  render() {

    if (this.state.error) {
      return <ErrorMessage message={'Character page destroyed, try later'} />
    }

    const itemList = (
      <ItemList 
        getData={this.service.getAllCharacters}
        renderItem={({name, gender}) => `${name} (gender: ${gender})`}
        onSelected={this.onCharSelected}/>
    )

    const charDetails = (
      <CharDetails 
      getData={this.service.getCharacter}
      charId={this.state.selectedItem}>
        <Field field='gender' label='Gender'/>
        <Field field='born' label='Born'/>
        <Field field='died' label='Died'/>
        <Field field='culture' label='Culture'/>
      </CharDetails>
    )

    return (
      <RowBlock left={itemList} right={charDetails}/>
    )
  }
}

