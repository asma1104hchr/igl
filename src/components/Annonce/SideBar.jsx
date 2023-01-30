import React from 'react';
import { MDBAccordion, MDBAccordionItem,MDBCheckbox ,MDBRange } from "mdb-react-ui-kit";

export default function SideBar() {
 
  return (
    
    <MDBAccordion borderless initialActive={1} className="pl-5 mt-5">
      
      <MDBAccordionItem  collapseId={1} headerTitle='Lycée'>
      <MDBCheckbox  name='flexcheck' value='' id='flexCheckDefault' label='1as'  />
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='2as' />
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='3as' />
    </MDBAccordionItem>
    <MDBAccordionItem collapseId={5} headerTitle='Cem'>
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='1am' />
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='2am' />
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='3am' />
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='4am' />
    </MDBAccordionItem>

    <MDBAccordionItem collapseId={6} headerTitle='Primaire'>
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='1ere' />
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='2ame' />
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='3eme' />
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='4eme' />
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='5eme' />
    </MDBAccordionItem>
 
 
    
  
    <MDBAccordionItem collapseId={7} headerTitle='Matière'>
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='Anglais' />
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='Français' />
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='Math' />
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='Physique' />
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='Science' />
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='Histoire&Géo' />
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='Science islamique' />
    <MDBCheckbox name='flexcheck' value='' id='flexCheckDefault' label='phylo' />
    </MDBAccordionItem>
    
    
    
    <MDBAccordionItem collapseId={8} headerTitle='Filtrage par prix'>
    <MDBRange
      defaultValue={1000}
      id='customRange'
      label='Prix'
    />
    </MDBAccordionItem>
    </MDBAccordion>
   
  );
}