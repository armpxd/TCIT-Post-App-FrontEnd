import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, deletePost } from "../actions/index";

function PostsList() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch, posts]);

  return (
    <div>
      <table>
      <tbody>
        <tr>
          <th>Nombre</th>
          <th>Decripcion</th>
          <th>Accion</th>
        </tr>
        {posts.tableRowsPosts !== undefined && posts.tableRowsPosts.length !== 0 ? (
          posts.tableRowsPosts.map((post) => {
            let { id, name, description } = post;
            return (
              <tr key = {id}>
                <td>{name}</td>
                <td>{description}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(deletePost(post));
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            );
          })
        ) : (
          null
        )}
        </tbody>
      </table>
    </div>
  );
}

export default PostsList;
