import dotenv from 'dotenv'

dotenv.config()

export const PORT=process.env.PORT || 3001

export const REACT_PROJECT_CMD=process.env.REACT_PROJECT_CMD