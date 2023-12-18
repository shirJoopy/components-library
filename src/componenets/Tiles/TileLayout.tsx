
import * as React from 'react';
import { TileLayout, TileLayoutItem, TileLayoutProps, TilePosition, TileStrictPosition } from '@progress/kendo-react-layout';
import styled from 'styled-components';
import { useEffect } from 'react';

interface CustomWindow extends Window {
    _userLanguage?: string;
  }
  declare let window: CustomWindow;
  
  

const Style = styled(TileLayout)`
    direction: ${()=>window._userLanguage === 'Hebrew' ? 'rtl' : 'ltr'};
    .empty > .k-tilelayout-item-header.k-card-header {
        border: none;
    }
    
`

export type ExtendedTileLayoutItem = Omit<TileLayoutItem, 'defaultPosition'> & {
    stick?: 'right' | 'top' | 'left' | 'bottom' | 'horizontal' | 'vertical' | 'none';
    defaultPosition: ExtendedTileLayoutItem['stick'] extends 'none'
    ? never
    : TilePosition;
};


export interface EmptyItem extends TileLayoutItem {
    className: 'empty',
    item: null,
    header: null,
    style: {
        background: 'transparent',
        border: 'none'
    }
}
class ObservableValue<T> {
    private _value: T;
    private _listeners: ((value: T) => void)[] = [];

    constructor(value: any) {
        this._value = value;
        this._listeners = [];
    }

    // Getter
    get value() {
        return this._value;
    }

    // Setter with listener notification
    set value(newValue) {
        this._value = newValue;
        this._listeners.forEach(listener => listener(newValue));
    }

    // Add listener function
    addListener(listener: (value: T) => void) {
        this._listeners.push(listener);
    }
}

class LayoutManager<T> {

    items: ObservableValue<TileLayoutItem>[] = [];

    constructor(props: TileLayoutProps, ref: React.ForwardedRef<TileLayout | null>) {
        Object.assign(this, props);
        this.items = props.items ? props.items.map(item=> new ObservableValue<TileLayoutItem>(item)) : [];


        this.items.forEach(item=>{
            item.addListener((newValue)=>{
                console.log('value changed for item ',newValue)
            })
        })
       
    }

    addItem(item: T) {
        const newItem = new ObservableValue<TileLayoutItem>(item);
        newItem.addListener((newValue)=>{
            console.log('item',item,'newValue',newValue)
        })
        this.items.push(newItem);
    }
    parseItem(item: T, props: TileLayoutProps){
        
        return {} as TileLayoutItem
    } 

    reposition(tiles:TileStrictPosition[]){
        tiles.forEach((tile,index)=>{
            const item = this.items[index].value;
            this.items[index].value ={...item,defaultPosition:{...item.defaultPosition,...tile}}
        })
        
    }

    get() {
        return this.items;
    }
}

export default (props: TileLayoutProps) => {

    const ref = React.useRef<TileLayout | null>(null);

    
    // useEffect(() => {
    //     console.log(ref.current);
    //     console.log(layoutManager.current);
    // }, [layoutManager.current, ref]);


  
    

   

     
     const layoutManager = React.useRef(new LayoutManager(props, ref))

     useEffect(() => {
        props.items && props.items.forEach(item => {
            layoutManager.current.addItem(item)
        })
    }, [layoutManager, props.items])
    // useEffect(()=>{
    //     console.log(layoutManager.current.items)
    // },[layoutManager.current.items])
    return (
        <Style
            {...props}
            onReposition={({value})=>{
                layoutManager.current.reposition(value);
                // console.log(value)
            }}
            
        />
    );
};


