import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export const heroSection = {
  title: 'Chào mừng bạn đến với ETLON coffee',
  description:
    'Ở đây tụi mình tạo điều kiện tối đa để các bạn thoải mái nhất khi quyết định ghé qua.',
}
export const about = [
  {
    id: 1,
    title: 'Coffee ở đây',
    description:
      'Cà phê không thuộc về đám đông ồn ào, hối hả. Càng một mình cà phê càng đắng và ngon',
    imageLink: <StaticImage src="../src/assets/about1.jpg" />,
  },
  {
    id: 2,
    title: 'Pha chế',
    description:
      'Cuộc đời là những giọt cà phê đen, bản thân ta sẽ là những viên đường bé nhỏ',
    imageLink: <StaticImage src="../src/assets/about2.jpg" />,
  },
]
export const highLightProducts = {
  title: 'Sản phẩm nổi bật',
  description:
    'Muốn nếm vị cà phê phải chờ đợi pha chế, đó là nét tinh hoa được chắt chiu lại mỗi giây sống chậm với cuộc đời',
}
export const products = [
  {
    id: 1,
    name: 'Cafe Sữa',
    description: 'It is a long established fact that a reader wil',
    imageLink: (
      <StaticImage src="../src/assets/cafe-sua.jpg" width={100} height={100} />
    ),
  },
  {
    id: 2,
    name: 'Cafe đen đá',
    description: 'It is a long established fact that a reader wil',
    imageLink: (
      <StaticImage src="../src/assets/cafe-den.jpg" width={100} height={100} />
    ),
  },
  {
    id: 3,
    name: 'Cappuccino',
    description: 'It is a long established fact that a reader wil',
    imageLink: (
      <StaticImage
        src="../src/assets/cappuccino.jpg"
        width={100}
        height={100}
      />
    ),
  },
]
export const bookTable = {
  title: 'Đặt bàn',
  description:
    'Cùng ghé qua quán cafe của chúng mình để có những giây phút thật chill cùng bạn bè nhé',
  imageLink: <StaticImage src="../src/assets/store.jpg" />,
}
