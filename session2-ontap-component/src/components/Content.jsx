import React from 'react'
import Card from './Card'

const Content = () => {
    // để render nhiều Card => map() để render ra UI
    // giả sử mình có 1 mảng dữ liệu như sau:
    const cards = [
        { id: 1, title: 'Card 1' },
        { id: 2, title: 'Card 2' },
        { id: 3, title: 'Card 3' },
        { id: 4, title: 'Card 4' },
        { id: 5, title: 'Card 5' },
        { id: 6, title: 'Card 6' },
    ]

    // LƯU Ý: dựa vào data để render số lượng Card tương ứng

    return (
        <div>
            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                    {/* LƯU Ý: code javascript bên trong dấu {} */}
                    {
                        cards.map((card) => (
                            <Card />
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Content
