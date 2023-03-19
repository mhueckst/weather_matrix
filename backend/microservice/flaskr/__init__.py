import os
from flask import Flask
# import db

def create_app():
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        DATABASE=os.path.join(app.instance_path, 'microservice.postgresql')
    )
    app.config.from_pyfile('config.py', silent=True)
    try:
        os.makedirs(app.instance_path)
    except OSError:
       pass


#     @app.post('/')
    @app.route('/hello')
    def seed():
#     engine = create_engine('postgresql://weatherMatrix:weatherMatrix@localhost:5432/weatherMatrix', echo=True)
#     Base = declarative_base(engine)
#         session = db.Locations(db.Base).loadSession()
#
#         mtHood = Locations(name="Mt. Hood", latitude=45.3714, longitude = -121.6962)
#         session.add(mtHood)
#         session.commit()
# #     session.add_all([item1, item2, item3])
        return '<h1>Hello World!</h1>'

    return app
