import React, {Component} from "react";
import ItemList from "../itemList";
import ItemDetails, {Field} from "../itemDetails";
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

    const itemDetails = (
      <ItemDetails 
      getData={this.service.getCharacter}
      itemId={this.state.selectedItem}>
        <Field field='gender' label='Gender'/>
        <Field field='born' label='Born'/>
        <Field field='died' label='Died'/>
        <Field field='culture' label='Culture'/>
      </ItemDetails>
    )

    return (
      <RowBlock left={itemList} right={itemDetails}/>
    )
  }
}

