import * as enums from '../utils/enums/Contacts'

class Contact {
  name: string
  email: string
  phone: string
  type: enums.ContactType
  id: number

  constructor(
    name: string,
    email: string,
    phone: string,
    type: enums.ContactType,
    id: number
  ) {
    this.name = name
    this.email = email
    this.phone = phone
    this.type = type
    this.id = id
  }
}

export default Contact
