//@ts-ignore
import MainButton from "@/components/buttons/MainButton";
import styles from "@/styles/components/forms/forms.module.css";
import { useForm } from "react-hook-form";

function ProductForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    function onSubmit(data: any) {
        console.log(data);
    }

    return (
        <div className={styles.addProduct}>
            <form
                className={`${styles.form} ${styles.product}`}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className={styles.info}>
                    <div className={styles.input}>
                        <label htmlFor="Country">Country</label>
                        <input
                            placeholder="Bolivia"
                            type="text"
                            id="country"
                            // required
                            {...register("country", {
                                required: "The field is required",
                            })}
                        />
                        {errors?.country && (
                            <p>{`${errors.country.message}`}</p>
                        )}
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="genre">Genre</label>
                        <input
                            placeholder="Video Games"
                            type="text"
                            id="genre"
                            // required
                            {...register("genre", {
                                required: "The field is required",
                            })}
                        />

                        {errors?.genre && <p>{`${errors.genre.message}`}</p>}
                    </div>
                    <div className={styles.input}>
                        <label htmlFor="quantity">Quanty</label>
                        <input
                            placeholder="2"
                            type="number"
                            id="quantity"
                            // required
                            {...register("quantity", {
                                required: "The field is required",
                                pattern: {
                                    value: /^(0|[1-9]\d*)(\.\d+)?$/,
                                    message:
                                        "The field should be a positive number",
                                },
                            })}
                        />

                        {errors?.quantity && (
                            <p>{`${errors.quantity.message}`}</p>
                        )}
                    </div>

                    <div className={styles.input}>
                        <label htmlFor="company">Company</label>
                        <select id="company" {...register("company")}>
                            <option value="ps">Play Station</option>
                            <option value="xbox">Xbox</option>
                            <option value="pstore">Play Store</option>
                            <option value="apple">Apple</option>
                            <option value="steam">Steam</option>
                        </select>

                        {errors?.quantity && (
                            <p>{`${errors.quantity.message}`}</p>
                        )}
                    </div>
                </div>
                <div className={styles.main}>
                    <div className={styles.input}>
                        <label htmlFor="title">Title</label>
                        <input
                            placeholder="PS5 Game"
                            type="text"
                            id="title"
                            // required
                            {...register("title", {
                                required: "The field is required",
                            })}
                        />

                        {errors?.title && <p>{`${errors.title.message}`}</p>}
                    </div>

                    <div className={styles.input}>
                        <label htmlFor="price">Price</label>
                        <input
                            placeholder="0.0003"
                            type="text"
                            id="price"
                            // required
                            {...register("price", {
                                required: "The field is required",
                                pattern: {
                                    value: /^[+-]?\d+(\.\d+)?$/,
                                    message:
                                        "The field should be a valid price",
                                },
                            })}
                        />

                        {errors?.price && <p>{`${errors.price.message}`}</p>}
                    </div>
                    <div className={styles.des}>
                        <div className={styles.input}>
                            <label htmlFor="description">Description</label>
                            <input
                                placeholder="The code is for..."
                                type="text"
                                id="description"
                                // required
                                {...register("description", {
                                    required: "The field is required",
                                })}
                            />

                            {errors?.description && (
                                <p>{`${errors.description.message}`}</p>
                            )}
                        </div>
                    </div>
                </div>
            </form>
            <MainButton type="button" handleClick={handleSubmit(onSubmit)}>
                Enviar
            </MainButton>
        </div>
    );
}

export default ProductForm;
