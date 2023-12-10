import * as React from 'react';
import { TileLayout, TileLayoutItem, TileLayoutProps, TilePosition, TileStrictPosition } from '@progress/kendo-react-layout';
import styled from 'styled-components';
import { useEffect } from 'react';


type LayoutProps = {
    columns: number,

    items: ExtendedTileLayoutItem[]
}

const Style = styled(TileLayout)`

    .empty > .k-tilelayout-item-header.k-card-header {
        border: none;
    }
    
`

export type ExtendedTileLayoutItem = Omit<TileLayoutItem, 'defaultPosition'> & {
    stick: 'right' | 'top' | 'left' | 'bottom' | 'horizontal' | 'vertical' | 'none';
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

class LayoutManager {

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

    addItem(item: ExtendedTileLayoutItem) {
        const newItem = new ObservableValue<TileLayoutItem>(item);
        newItem.addListener((newValue)=>{
            console.log('item',item,'newValue',newValue)
        })
        this.items.push(newItem);
    }
    parseItem(item: ExtendedTileLayoutItem, props: TileLayoutProps){
        
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


const parseItem:
    (item: ExtendedTileLayoutItem, props: TileLayoutProps) =>
        TileLayoutItem = ({ stick, ...item }) => {
            switch (stick) {
                case 'left':
                    return { ...item, defaultPosition: { col: 1, rowSpan: 3 } }

                default:
                    return item;
            };
        }
export default ({ items, columns }: LayoutProps) => {

    const ref = React.useRef<TileLayout | null>(null);

    const tileLayoutProps = {
        columns,
        rowHeight: 200,
        gap: { rows: 1, columns: 1 },

    }

    const layoutManager = React.useRef(new LayoutManager(tileLayoutProps, ref))
    // useEffect(() => {
    //     console.log(ref.current);
    //     console.log(layoutManager.current);
    // }, [layoutManager.current, ref]);

    useEffect(() => {
        items.forEach(item => {
            layoutManager.current.addItem(item)
        })
    }, [layoutManager, items])
    const tiles = React.useMemo(() => {
        if (items.length) {
            return items.map((item) => parseItem(item, tileLayoutProps))
        }
        return [];
    }, [items])

    // useEffect(()=>{
    //     console.log(layoutManager.current.items)
    // },[layoutManager.current.items])
    return (
        <Style
            {...tileLayoutProps}
            onReposition={({value})=>{
                layoutManager.current.reposition(value);
                // console.log(value)
            }}
            items={tiles}
        />
    );
};

