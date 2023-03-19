from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

engine = create_engine('postgresql://weatherMatrix:weatherMatrix@localhost/weatherMatrix')
Session = sessionmaker(bind=engine)
Base = declarative_base()

class Locations(Base):
    """"""
    __tablename__ = 'Location'
    __table_args__ = ('Location',autoload:True)

def loadSession():
    metadata = Base.metadata
#     Session = sessionmaker(bind=engine)
    session = Session()
    return session


