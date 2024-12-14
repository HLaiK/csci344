import json

from flask import Response, request
from flask_restful import Resource

from models import db
from models.post import Post
from views import get_authorized_user_ids, can_view_post


def get_path():
    return request.host_url + "api/posts/"


class PostListEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def get(self):

        # giving you the beginnings of this code (as this one is a little tricky for beginners):
        ids_for_me_and_my_friends = get_authorized_user_ids(self.current_user)
        try:
            limit = int(request.args.get("limit", 20))
            if limit > 50:
                return Response(
                    json.dumps({"Message": "the limit is 50"}),
                    mimetype="application/json",
                    status=400,
                )
        except:
            return Response(
                json.dumps({"Message": "the limit must be an int"}),
                mimetype="application/json",
                status=400,
                )

        posts = Post.query.filter(Post.user_id.in_(ids_for_me_and_my_friends)).limit(limit).all()
        
        data = [item.to_dict(user=self.current_user) for item in posts.all()]

        return Response(json.dumps(data), mimetype="application/json", status=200)

    def post(self):
        data = request.json
        image_url = data.get("image_url")
        caption = data.get("caption")
        alt_text = data.get("alt_text")

        if not image_url:
            return Response(
            json.dumps({"Message": f"image url is required"}),
            mimetype="application/json",
            status=400
            )

        new_post = Post(
            image_url = image_url,
            user_id = self.current_user.id,
            caption = caption,
            alt_text = alt_text
        )
        db.session.add(new_post)
        db.session.commit()

        return Response(
            json.dumps({}), 
            mimetype="application/json", 
            status=201,
        )


class PostDetailEndpoint(Resource):

    def __init__(self, current_user):
        self.current_user = current_user

    def patch(self, id):
        print("POST id=", id)

        # TODO: Add PATCH logic...

        if post is None:
            return Response(
            json.dumps({"Message": f"Post id:{id} not found"}),
            mimetype="application/json",
            status=404,
            )
        
        if post.user_id != self.current_user.id:
            return Response(
            json.dumps({"Message": f"You are not allowed to modify post id:{id}"}),
            mimetype="application/json",
            status=403,
            )
        
        data = request.json
        image_url = data.get("image_url")
        caption = data.get("caption")
        alt_text = data.get("alt_text")

        if caption is not None:
            post.caption = caption
        if image_url is not None:
            post.image_url = image_url  
        if alt_text is not None:
            post.alt_text = alt_text

        db.session.commit()  

        return Response(
            json.dumps({}), 
            mimetype="application/json", 
            status=200,
        )

    def delete(self, id):
        print("POST id=", id)

        post = Post.query.get(id)
        # TODO: Add DELETE logic...

         if not post:
            return Response(
            json.dumps({"Message": f"Post id:{id} not found"}),
            mimetype="application/json",
            status=404, 
            )
        
        if post.user_id != self.current_user.id:
            return Response(
            json.dumps({"Message": f"You are not allowed to modify post id:{id}"}),
            mimetype="application/json",
            status=403,
            )
        
        Post.query.filter_by(id=id).delete()
        #db.session.delete(post)
        db.session.commit()  

        return Response(
            json.dumps({}),
            mimetype="application/json",
            status=200,
        )

    def get(self, id):
        print("POST id=", id)

        # TODO: Add GET logic...
        canview = can_view_post(id, self.current_user)
        if (canview):
            post = Post.query.get(id)
            return Response(
            json.dumps(post.to_dict(user=self.current_user)),
            mimetype="application/json",
            status=404,
            )
        else:
        return Response(
            json.dumps({}),
            mimetype="application/json",
            status=200,
        )


def initialize_routes(api, current_user):
    api.add_resource(
        PostListEndpoint,
        "/api/posts",
        "/api/posts/",
        resource_class_kwargs={"current_user": current_user},
    )
    api.add_resource(
        PostDetailEndpoint,
        "/api/posts/<int:id>",
        "/api/posts/<int:id>/",
        resource_class_kwargs={"current_user": current_user},
    )
