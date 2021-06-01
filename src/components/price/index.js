import React from "react";

import { PriceDiv, Reservation, Table, SubTable, SongSelection,  } from "./styles/Price";

export default function Price({children}) {
    return <PriceDiv>{children}</PriceDiv>
}

Price.Reservation = function PriceReservation({ children }) {
    return <Reservation>{children}</Reservation>
}

Price.Table = function PriceTable({children}) {
    return <Table>{children}</Table>
}

Price.SubTable = function PriceSubTable({children}) {
    return <SubTable>{children}</SubTable>
}

Price.SongSelection = function PriceSongSelection({children}) {
    return <SongSelection>{children}</SongSelection>
} 