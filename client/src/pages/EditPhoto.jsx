
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { getPhotoById, updatePhoto, uploadPhoto } from '../service/photoService';
import { useNavigate, useNavigation, useParams } from 'react-router-dom';

const photoSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(30),
});


function EditPhoto() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [photo, setPhoto] = useState(null);
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        resolver: zodResolver(photoSchema),
        defaultValues: {
            title: photo?.title || '',
            description: photo?.description || ''
        }
    });

    useEffect(() => {
        const getPhoto = async () => {
            try {
                const response = await getPhotoById(id);
                setPhoto(response);
                setValue('title', response.title);
                setValue('description', response.description);
            } catch (error) {
                console.log(error);
            }
        }
        getPhoto();
    }, [id])



    const onSubmit = async (data) => {
        const result = await updatePhoto({ id, ...data })
        navigate('/');
    }

    return (
        <div className='wrapper'>
            {photo && (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='inner'>
                        {photo && <img width={200} height={200} src={photo.image} alt="uploaded image" />}
                        <div className='space'>
                            <input type="text" placeholder="Title" className="input-field" {...register('title')} />
                            {errors.title && <p className="error">{errors.title.message}</p>}
                            <textarea placeholder="Description" className="textarea-field" {...register('description')}></textarea>
                            {errors.description && <p className="error">{errors.description.message}</p>}
                        </div>
                        {!photo && <p className="error">Please upload an image first</p>}
                        <button disabled={!photo} className='btn'>Edit</button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default EditPhoto
