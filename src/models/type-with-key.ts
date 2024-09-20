export type TypeWithKey<T> = {[key: string]: T}; // El tipo T es para definir que es genérico

//La idea de esto es poder indicar obligatoriamente que lo que nosotros utilicemos como key sea un string