export interface TUser {
  id: number
  userName: string | null
  role: 'admin' | 'customer'
}

export interface TPermissions {
  add: boolean
  edit: boolean
  deleted: boolean
}

export const DefaultPermissions: TPermissions = {
  add: false,
  edit: false,
  deleted: false,
}

export const permissions: Record<TUser['role'], TPermissions> = {
  admin: {
    add: true,
    edit: true,
    deleted: true,
  },
  customer: {
    add: false,
    edit: false,
    deleted: false,
  },
}

export function verifyPermission(user: TUser): TPermissions {
  console.log(user)
  console.log(permissions[user.role])
  return permissions[user.role]
}
