import axios, {AxiosResponse} from 'axios';

interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    constructor(private data: UserProps) {
    }

    get(propName: string): (number | string) {
        return this.data[propName];
    }

    set(update: UserProps): void {
        // @ts-ignore
        Object.assign(this.data, update);
    }



    fetch(): void {
        axios.get(`http://localhost:3000/users/${this.get('id')}`)
            .then((res: AxiosResponse): void => {
                this.set(res.data);
            });
    }

    save(): void {
        const id = this.get('id');
        if (id) {
            //put
            axios.put(`http://localhost:3000/users/${id}`, this.data);
        }else {
            //post
            axios.post('http://localhost:3000/users', this.data);
        }
    }

}