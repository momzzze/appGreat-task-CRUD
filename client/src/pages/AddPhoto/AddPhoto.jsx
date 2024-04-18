import {
    zodResolver
} from '@hookform/resolvers/zod';
import {
    useState
} from 'react';
import {
    useForm
} from 'react-hook-form';
import {
    z
} from 'zod';
import {
    uploadPhoto
} from '../../service/photoService';
import {
    useNavigate,
    useNavigation
} from 'react-router-dom';

const photoSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(30),
});


function AddPhoto() {
    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm({
        resolver: zodResolver(photoSchema),
    });


    const convertToBase64 = async (e) => {
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            setImage(reader.result);
        };
        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    }
    const onSubmit = async (data) => {
        const result = await uploadPhoto({
            ...data,
            image
        })
        navigate('/');
    }

    return ( <
            div className = 'wrapper' >
            <
            form onSubmit = {
                handleSubmit(onSubmit)
            } >

            <
            div className = 'inner' >
            <
            h1 > Upload Photo < /h1> <
            label htmlFor = "file"
            className = "custom-file-input" > Choose Image < /label> <
            input id = "file"
            accept = "image/*"
            type = "file"
            onChange = {
                convertToBase64
            }
            /> {
                image && < img width = {
                    200
                }
                height = {
                    200
                }
                src = {
                    image
                }
                alt = "uploaded image" / >
            } <
            div className = 'space' >
            <
            input type = "text"
            placeholder = "Title"
            className = "input-field" {
                ...register('title')
            }
            /> {
                errors.title && < p className = "error" > {
                        errors.title.message
                    } < /p>} <
                    textarea placeholder = "Description"
                className = "textarea-field" {
                    ...register('description')
                } > < /textarea> {
                    errors.description && < p className = "error" > {
                            errors.description.message
                        } < /p>} <
                        /div> {
                            !image && < p className = "error" > Please upload an image first < /p>} <
                                button disabled = {
                                    !image
                                }
                            className = 'btn' > Submit < /button> <
                                /div> <
                                /form> <
                                /div>
                        )
                }

                export default AddPhoto